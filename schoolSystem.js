openapi: 3.0.0
info:
  title: Students Course Details API
  version: "1.0"
paths:
  /students:
    get:
      summary: List Students
      operationId: findStudents
      responses:
        "200":
          description: ""
          content:
            "*/*":
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/students-output"
    post:
      summary: Create Students
      operationId: createStudents
      requestBody:
        $ref: "#/components/requestBodies/students-input"
      responses:
        "201":
          description: ""
          content:
            "*/*":
              schema:
                $ref: "#/components/schemas/students-output-detailed"
  "/students/{studentsId}":
    parameters:
      - name: studentsId
        in: path
        required: true
        schema:
          type: string
    get:
      summary: Get Students
      operationId: getStudents
      responses:
        "200":
          description: ""
          content:
            "*/*":
              schema:
                $ref: "#/components/schemas/students-output-detailed"
    put:
      summary: Update Students
      operationId: updateStudents
      requestBody:
        $ref: "#/components/requestBodies/students-input"
      responses:
        "200":
          description: ""
          content:
            "*/*":
              schema:
                $ref: "#/components/schemas/students-output-detailed"
    delete:
      summary: Delete Students
      operationId: deleteStudents
      responses:
        "204":
          description: ""
  /courses:
    get:
      summary: List Course
      operationId: findCourses
      responses:
        "200":
          description: ""
          content:
            "*/*":
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/course-output"
      description: list of the courses that the students are enrolled
    post:
      summary: Create Course
      operationId: createCourse
      requestBody:
        $ref: "#/components/requestBodies/course-input"
      responses:
        "201":
          description: ""
          content:
            "*/*":
              schema:
                $ref: "#/components/schemas/course-output-detailed"
  "/courses/{courseId}":
    parameters:
      - name: courseId
        in: path
        required: true
        schema:
          type: string
    get:
      summary: Get Course
      operationId: getCourse
      responses:
        "200":
          description: ""
          content:
            "*/*":
              schema:
                $ref: "#/components/schemas/course-output-detailed"
    put:
      summary: Update Course
      operationId: updateCourse
      requestBody:
        $ref: "#/components/requestBodies/course-input"
      responses:
        "200":
          description: ""
          content:
            "*/*":
              schema:
                $ref: "#/components/schemas/course-output-detailed"
    delete:
      summary: Delete Course
      operationId: deleteCourse
      responses:
        "204":
          description: ""
  /gradings:
    get:
      summary: List Grading
      operationId: findGradings
      responses:
        "200":
          description: ""
          content:
            "*/*":
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/grading-output"
    post:
      summary: Create Grading
      operationId: createGrading
      requestBody:
        $ref: "#/components/requestBodies/grading-input"
      responses:
        "201":
          description: ""
          content:
            "*/*":
              schema:
                $ref: "#/components/schemas/grading-output-detailed"
  "/gradings/{gradingId}":
    parameters:
      - name: gradingId
        in: path
        required: true
        schema:
          type: string
    get:
      summary: Get Grading
      operationId: getGrading
      responses:
        "200":
          description: ""
          content:
            "*/*":
              schema:
                $ref: "#/components/schemas/grading-output-detailed"
    put:
      summary: Update Grading
      operationId: updateGrading
      requestBody:
        $ref: "#/components/requestBodies/grading-input"
      responses:
        "200":
          description: ""
          content:
            "*/*":
              schema:
                $ref: "#/components/schemas/grading-output-detailed"
    delete:
      summary: Delete Grading
      operationId: deleteGrading
      responses:
        "204":
          description: ""
servers:
  - url: //example.com
components:
  requestBodies:
    grading-input:
      content:
        application/json:
          schema:
            $ref: "#/components/schemas/grading-input"
    students-input:
      content:
        application/json:
          schema:
            $ref: "#/components/schemas/students-input"
    course-input:
      content:
        application/json:
          schema:
            $ref: "#/components/schemas/course-input"
  schemas:
    students-common:
      title: Students Common
      description: The properties that are shared amongst all versions of the Students
        model.
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
        address:
          type: string
        class:
          type: string
      required:
        - id
        - name
        - address
        - class
    students-input:
      title: Students Input
      description: The properties that are allowed when creating or updating a Students.
      allOf:
        - $ref: "#/components/schemas/students-common"
        - type: object
          properties:
            {}
    students-output:
      title: Students Output
      description: The properties that are included when fetching a list of Students.
      allOf:
        - type: object
          properties:
            {}
        - $ref: "#/components/schemas/students-common"
    students-output-detailed:
      title: Students Output Detailed
      description: The properties that are included when fetching a single Students.
      allOf:
        - $ref: "#/components/schemas/students-output"
        - type: object
          properties:
            {}
    course-common:
      title: Course Common
      description: The properties that are shared amongst all versions of the Course model.
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
        description:
          type: string
      required:
        - id
        - name
        - description
    course-input:
      title: Course Input
      description: The properties that are allowed when creating or updating a Course.
      allOf:
        - $ref: "#/components/schemas/course-common"
        - type: object
          properties:
            {}
    course-output:
      title: Course Output
      description: The properties that are included when fetching a list of Courses.
      allOf:
        - type: object
          properties:
            {}
        - $ref: "#/components/schemas/course-common"
    course-output-detailed:
      title: Course Output Detailed
      description: The properties that are included when fetching a single Course.
      allOf:
        - $ref: "#/components/schemas/course-output"
        - type: object
          properties:
            {}
    grading-common:
      title: Grading Common
      description: The properties that are shared amongst all versions of the Grading model.
      type: object
      properties:
        id:
          type: integer
        studentid:
          type: integer
        courseid:
          type: integer
        grade:
          type: number
      required:
        - id
        - studentid
        - courseid
        - grade
    grading-input:
      title: Grading Input
      description: The properties that are allowed when creating or updating a Grading.
      allOf:
        - $ref: "#/components/schemas/grading-common"
        - type: object
          properties:
            {}
    grading-output:
      title: Grading Output
      description: The properties that are included when fetching a list of Gradings.
      allOf:
        - type: object
          properties:
            {}
        - $ref: "#/components/schemas/grading-common"
    grading-output-detailed:
      title: Grading Output Detailed
      description: The properties that are included when fetching a single Grading.
      allOf:
        - $ref: "#/components/schemas/grading-output"
        - type: object
          properties:
            {}