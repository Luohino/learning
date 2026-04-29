import type {
  BaseRecord,
  DataProvider,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";

import { mockSubjects } from "@/providers/mock/subjects";

function applySubjectsFilters(
  data: typeof mockSubjects,
  params: GetListParams,
) {
  const filters = params.filters ?? [];

  return filters.reduce((acc, f) => {
    if ("field" in f) {
      const field = String(f.field);
      const operator = f.operator;
      const value = f.value;

      if (field === "department" && operator === "eq") {
        return acc.filter((s) => s.department === String(value));
      }

      if (field === "name" && operator === "contains") {
        const q = String(value).toLowerCase();
        return acc.filter((s) => s.name.toLowerCase().includes(q));
      }
    }

    return acc;
  }, data);
}

function applySubjectsSorters(data: typeof mockSubjects, params: GetListParams) {
  const sorters = params.sorters ?? [];
  if (sorters.length === 0) return data;

  const [{ field, order }] = sorters;
  const dir = order === "desc" ? -1 : 1;

  if (field === "id") {
    return [...data].sort((a, b) => (a.id - b.id) * dir);
  }

  if (field === "name") {
    return [...data].sort((a, b) => a.name.localeCompare(b.name) * dir);
  }

  return data;
}

function applyPagination(data: typeof mockSubjects, params: GetListParams) {
  const pagination = params.pagination as
    | { current?: number; pageSize?: number }
    | undefined;
  const current = pagination?.current ?? 1;
  const pageSize = pagination?.pageSize ?? data.length;
  const start = (current - 1) * pageSize;
  return data.slice(start, start + pageSize);
}

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>(
    params: GetListParams,
  ): Promise<GetListResponse<TData>> => {
    const { resource } = params;

    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }

    const filtered = applySubjectsFilters(mockSubjects, params);
    const sorted = applySubjectsSorters(filtered, params);
    const paged = applyPagination(sorted, params);

    return {
      data: paged as unknown as TData[],
      total: filtered.length,
    };
  },

  getOne: async () => {
    throw new Error("This function is not present in mock");
  },
  create: async () => {
    throw new Error("This function is not present in mock");
  },
  update: async () => {
    throw new Error("This function is not present in mock");
  },
  deleteOne: async () => {
    throw new Error("This function is not present in mock");
  },

  getApiUrl: () => "",
};