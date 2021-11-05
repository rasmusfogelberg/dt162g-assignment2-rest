let courses = {
  1: {
    _id: 1,
    courseId: "DT162G",
    courseName: "Javascript-baserad webbutveckling",
    coursePeriod: 1
  },
  2: {
    _id: 2,
    courseId: "IK060G",
    courseName: "Projektledning",
    coursePeriod: 1
  },
  3: {
    _id: 3,
    courseId: "DT071G",
    courseName: "Programmering i C#.NET",
    coursePeriod: 2
  },
  4: {
    _id: 4,
    courseId: "DT148G",
    courseName: "Webbutveckling för mobila enheter",
    coursePeriod: 2
  },
  5: {
    _id: 5,
    courseId: "DT102G",
    courseName: "ASP.NET med C#",
    coursePeriod: 3
  },
  6: {
    _id: 6,
    courseId: "IG021G",
    courseName: "Affärsplaner och kommersialisering",
    coursePeriod: 3
  },
  7: {
    _id: 7,
    courseId: "DT069G",
    courseName: "Multimedia för webben",
    coursePeriod: 4
  },
  8: {
    _id: 8,
    courseId: "DT080G",
    courseName: "Självständigt arbete",
    coursePeriod: 4
  },
};

// Function to get all courses
export const findAll = () => {
  return Object.values(courses);
};

// Function to get single course
export const findSingle = (id) => {
  return courses[id];
};

// Function to delete single course
export const remove = (id) => {
  delete courses[id];
};


