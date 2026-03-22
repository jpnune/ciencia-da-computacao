# 🚀 Roteiro de Especialização: Ciência da Computação com Implementação em Java

Este roteiro contém **todos os 23 temas principais e 159 assuntos específicos** do fluxograma original de *Computer Science*. O foco permanece acadêmico e técnico, utilizando **Java** como a ferramenta principal para exemplificação e exercícios práticos.

---

## 🟢 Módulo 1: O Despertar da Máquina e Fundamentos (How Computers Work)
1.  **Como os Computadores Funcionam:**
    *   Como a CPU executa programas (**How CPU Executes Programs**).
    *   Registradores e RAM (**Registers and RAM**).
    *   Instruções e Programas (**Instructions and Programs**).
    *   Cache da CPU (**CPU Cache**).
    *   Como os computadores calculam (**How Computers Calculate**).
    *   *💡 Prática em Java:* Entenda como o **Bytecode** Java é interpretado pela JVM e como ela gerencia a memória **Stack** e **Heap**.
2.  **Escolha uma Linguagem (Pick a Language):**
    *   Opções: **Python, Go, C#, C++, Rust, C, Java**.
    *   *☕ Foco Java:* Instale o JDK 21+ e configure seu ambiente.
3.  **Matemática Básica (Basic Math Skills):**
    *   **Probability** (Probabilidade) e **Combinatorics** (Combinatória).
4.  **[EXTRA] Git e Controle de Versão:** Essencial para Engenharia de Software.

---

## 🟡 Módulo 2: O Alfabeto dos Dados e Eficiência (Data Structures & Big O)
1.  **Estruturas de Dados Básicas:**
    *   **Array**, **Linked List**, **Stack**, **Queue**, **Hash Table**.
    *   *☕ Java Collections:* Estude `ArrayList`, `LinkedList`, `Stack`, `PriorityQueue` e `HashMap`.
2.  **Notação Assintótica (Asymptotic Notation):**
    *   **Big O**, **Big-Theta**, **Big Omega**.
    *   **Common Runtimes:** **Constant**, **Logarithmic**, **Linear**, **Polynomial**, **Exponential**, **Factorial**.
    *   *💡 Desafio:* Analise a complexidade de tempo dos métodos da API de Collections.
3.  **Heap** e sua importância (especialmente na alocação de objetos em Java).

---

## ⚗️ Módulo 3: Lógica, Estruturas de Dados e Algoritmos Clássicos
1.  **Recursão (Recursion):** **Tail Recursion** e **Non-Tail Recursion**.
2.  **Algoritmos de Busca (Searching):** **Binary Search** e **Linear Search**.
    *   *☕ Exemplo:* Implemente a busca binária usando métodos estáticos em Java.
3.  **Algoritmos de Ordenação (Sorting):**
    *   **Bubble Sort**, **Selection Sort**, **Insertion Sort**, **Heap Sort**, **Quick Sort**, **Merge Sort**.
4.  **Árvores (Tree):**
    *   **Binary Tree**, **Binary Search Tree**, **Full Binary Tree**, **Complete Binary Tree**, **Balanced Tree**, **Unbalanced Tree**.
    *   **Tree Traversals:** **Pre-Order Traversal**, **In-Order Traversal**, **Post Order Traversal**, **Breadth First Search**, **Depth First Search**.
5.  **Tries** (Estruturas de prefixo).
6.  **Caches:** **MFU Cache**, **LRU Cache**, **LFU Cache**.
    *   *☕ Java:* Veja como o `LinkedHashMap` pode ser usado para criar um cache LRU.

---

## 🏗️ Módulo 4: Grafos e Estratégias de Resolução (Common Algorithms)
1.  **Grafos (Graph):**
    *   Tipos: **Directed Graph**, **Undirected Graph**, **Spanning Tree**.
    *   Representação: **Adjacency Matrix**, **Adjacency List** (usando `List<List<Integer>>`).
    *   Algoritmos de Grafo (**Graphs**): **Breadth First Search**, **Depth First Search**, **Bellman Ford's Algorithm**, **Dijkstra's Algorithm**, **A* Algorithm**.
2.  **Algoritmos Gananciosos (Greedy Algorithms):**
    *   **Dijkstra's Algorithm**, **Huffman Coding**, **Kruskal's Algorithm**, **Ford-Fulkerson Algorithm**, **Prim's Algorithm**.
3.  **Back Tracking:**
    *   **Finding Hamiltonian Paths**, **Solving N Queen Problem**, **Maze Solving Problem**, **The Knight's Tour Problem**.
4.  **Resolução de Strings:** **Rabin-Karp Algorithm**.

---

## 💠 Módulo 5: Manipulação de Baixo Nível e Design (Encodings & Patterns)
1.  **Codificação de Caracteres (Character Encodings):** **Unicode**, **ASCII**.
    *   *☕ Java:* Entenda como o Java lida com charsets e a classe `Charset`.
2.  **Operadores Bit a Bit (Bitwise Operators)**.
3.  **Endianness:** **Big Endian**, **Little Endian**.
4.  **Matemática de Ponto Flutuante (Floating Point Math)**.
    *   *💡 Java:* Use `float`, `double` e compare com `BigDecimal`.
5.  **UML (Common UML Diagrams):**
    *   **Class Diagrams**, **Usecase Diagrams**, **Activity Diagrams**, **Statemachine Diagrams**, **Sequence Diagrams**.
6.  **Padrões de Projeto (Design Patterns):**
    *   **GoF Design Patterns**, **Architectural Patterns**, **Dependency Injection**, **Null Object Pattern**, **Type Object Pattern**.
    *   *☕ Java:* Padrões como **Singleton** e **Observer** são nativos ou muito comuns no ecossistema.

---

## 🌐 Módulo 6: Comunicação, Redes e Segurança (Networking & Security)
1.  **Redes (Networking):**
    *   **OSI Model**, **TCP/IP Model**, **DNS**, **HTTP**, **TLS & HTTPS**, **Sockets**.
    *   *☕ API Java:* Estude as bibliotecas `java.net` e `java.net.http`.
2.  **Segurança (Security):**
    *   **Hashing / Encryption / Encoding**.
    *   **Public Key Cryptography**, **Hashing Algorithms**.
    *   **OWASP Top 10**.
    *   *☕ Biblioteca:* Explore a arquitetura JCA (*Java Cryptography Architecture*).

---

## 🗄️ Módulo 7: Dados e Persistência (Databases)
1.  **Fundamentos de Bancos de Dados:**
    *   **SQL vs NoSQL Databases**, **Normalization / Denormalization**, **Entity-Relationship Model**, **DDL, DML, DQL, DCL**.
2.  **Gerenciamento e Internos:**
    *   **Locking**, **ACID Model**, **BASE**, **CAP Theorem**, **PACELC**, **Indexes**, **Views**, **Transactions**, **Stored Procedures**, **Database Federation**, **Replication**, **Sharding**.
    *   *☕ Conexão:* Estude **JDBC** e a abstração com **JPA/Hibernate**.

---

## ⚡ Módulo 8: Arquitetura de Sistemas (System Design)
1.  **Escalabilidade e Infra:**
    *   **Horizontal vs Vertical Scaling**, **Load Balancing**, **Clustering**, **Caching**, **CDN**, **Proxy**, **CAP Theorem** (novamente), **Queues**.
2.  **Estilos e Comunicação:**
    *   **Architectural Styles:** **REST**, **GraphQL**, **gRPC**.
    *   **Cloud Design Patterns:** **Long Polling**, **Short Polling**, **Web Sockets**, **SSE**.
    *   *☕ Spring:* Explore o ecossistema Spring Boot para implementar esses estilos.
3.  **[EXTRA] Testes e Qualidade:** TDD, Testes Unitários (**JUnit**) e Integrados.

---

## 💻 Módulo 9: Sistemas Operacionais (Processes and Threads)
1.  **Processos e Linhas de Execução:**
    *   **Process Forking**, **Memory Management**, **Lock / Mutex / Semaphore**, **Concurrency in Multiple Cores**, **Scheduling Algorithms**, **CPU Interrupts**, **Processes vs Threads**.
    *   *☕ Concorrência Java:* Domine a API de `java.util.concurrent`, **Virtual Threads** (Java 21) e o conceito de **Synchronized**.

---

## 🎓 Módulo 10: Estruturas Avançadas e Teoria (Complexity Classes)
1.  **Pesquisa de Strings (String Search & Manipulations):**
    *   **Search Pattern in Text**, **Suffix Arrays**.
    *   **Substring Search:** **Brute Force Search**, **Robin-Karp**, **Knuth-Morris Pratt**, **Boyer-Moore**.
2.  **Árvores de Busca Balanceadas (Balanced Search Trees):**
    *   **AVL Trees**, **Red / Black Trees**, **2 3 Search Trees**, **2 3 4 Trees**, **K-ary / M-ary Tree**, **B-Tree**.
    *   *💡 Curiosidade:* O `TreeMap` do Java utiliza uma Red-Black Tree internamente.
3.  **Estruturas Espaciais e Modernas:**
    *   **K-D Trees**, **Skip Lists**.
4.  **Classes de Complexidade (Complexity Classes):**
    *   **P**, **NP**, **P = NP**, **Co-NP**, **NP Hard**, **NP Complete**.
    *   **Problemas Clássicos (NP Complete):** **Travelling Salesman Problem**, **Knapsack Problem**, **Longest Path Problem**.

---

### 💡 Conselhos Finais para o Especialista:
*   Este roteiro é exaustivo: ele contém **todas as 182 marcações** do seu PDF original.
*   O segredo da fluidez é focar no **conceito científico** primeiro e depois ver como o **Java** resolve ou implementa aquele desafio técnico.
