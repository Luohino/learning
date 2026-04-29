import { Subject } from "@/types";

export const mockSubjects: Subject[] = [
  // BSc Computer Science
  {
    id: 301,
    courses: "BSc Computer Science",
    department: "CS",
    code: "CS101",
    name: "Programming Fundamentals",
    briefDescription: "Core programming concepts using modern tooling.",
    description:
      "Introduces programming fundamentals including variables, control flow, functions, and basic data structures. Emphasizes problem solving, debugging, and writing readable code through weekly labs and small projects.",
    createdAt: "2026-04-01T10:00:00.000Z",
  },
  {
    id: 302,
    courses: "BSc Computer Science",
    department: "CS",
    code: "CS205",
    name: "Data Structures & Algorithms",
    briefDescription: "Analyze and implement common structures and algorithms.",
    description:
      "Covers arrays, linked lists, stacks, queues, trees, graphs, and hashing, along with complexity analysis. Students implement classic algorithms (sorting, searching, traversal) and learn to choose the right structure for a given problem.",
    createdAt: "2026-04-03T10:00:00.000Z",
  },
  {
    id: 303,
    courses: "BSc Computer Science",
    department: "CS",
    code: "CS310",
    name: "Databases",
    briefDescription: "Relational modeling, SQL, and transactional thinking.",
    description:
      "Introduces relational database concepts including ER modeling, normalization, SQL queries, indexes, and transactions. Includes a practical component building a small database-backed application and reasoning about performance trade-offs.",
    createdAt: "2026-04-05T10:00:00.000Z",
  },

  // BSc Mathematics
  {
    id: 201,
    courses: "BSc Mathematics",
    department: "Math",
    code: "MATH101",
    name: "Calculus I",
    briefDescription: "Limits, derivatives, and applications.",
    description:
      "Covers limits and continuity, differentiation rules, and applications to optimization and curve sketching. Includes an introduction to integration as the inverse of differentiation, with extensive practice on problem sets.",
    createdAt: "2026-04-02T10:00:00.000Z",
  },
  {
    id: 202,
    courses: "BSc Mathematics",
    department: "Math",
    code: "MATH210",
    name: "Linear Algebra",
    briefDescription: "Vectors, matrices, and linear transformations.",
    description:
      "Introduces vector spaces, matrices, systems of linear equations, eigenvalues/eigenvectors, and orthogonality. Focuses on both computation and conceptual understanding through geometric interpretations and applications.",
    createdAt: "2026-04-06T10:00:00.000Z",
  },
  {
    id: 203,
    courses: "BSc Mathematics",
    department: "Math",
    code: "MATH240",
    name: "Discrete Mathematics",
    briefDescription: "Logic, proofs, combinatorics, and graphs.",
    description:
      "Explores propositional logic, proof techniques, sets, relations, functions, combinatorics, and introductory graph theory. Builds the mathematical foundation commonly used in computer science and theoretical problem solving.",
    createdAt: "2026-04-08T10:00:00.000Z",
  },

  // BA English Literature
  {
    id: 101,
    courses: "BA English Literature",
    department: "English",
    code: "ENG110",
    name: "Introduction to Literary Studies",
    briefDescription: "Read closely; write clearly; think critically.",
    description:
      "Introduces core tools of literary analysis: close reading, narrative, poetic form, and critical frameworks. Students practice academic writing through short responses, a comparative essay, and a final textual analysis.",
    createdAt: "2026-04-04T10:00:00.000Z",
  },
  {
    id: 102,
    courses: "BA English Literature",
    department: "English",
    code: "ENG220",
    name: "Shakespeare: Plays and Context",
    briefDescription: "Major plays with historical and performance context.",
    description:
      "Studies selected comedies, tragedies, and histories with attention to language, structure, and performance. Places the plays in their social and historical contexts and examines how interpretation shifts across time and production.",
    createdAt: "2026-04-07T10:00:00.000Z",
  },
  {
    id: 103,
    courses: "BA English Literature",
    department: "English",
    code: "ENG245",
    name: "Modern Poetry",
    briefDescription: "Form, voice, and experimentation in modern poetry.",
    description:
      "Surveys modern poetry across key movements and styles, focusing on form, imagery, and voice. Students develop interpretive skills and experiment with critical responses, including a curated anthology-style final project.",
    createdAt: "2026-04-09T10:00:00.000Z",
  },
];

