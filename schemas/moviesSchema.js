export const Movies = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      _id: {
        type: 'string',
        description: 'The id of the movie',
        example: '63df7c861e058751374893da',
      },
      title: {
        type: 'string',
        description: 'The title of the movie',
        example: 'The Godfather',
      },
      releaseYear: {
        type: 'string',
        description: 'The release year of the movie',
        example: 1972,
      },
      actors: {
        type: 'array',
        items: {
          type: 'string',
          description: 'The actors of the movie',
          example: 'Marlon Brando, Al Pacino, James Caan',
        },
      },
      poster: {
        type: 'string',
        description: 'The poster of the movie',
        example:
          'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
      },
    },
  },
};

export const Movie = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      description: 'The id of the movie',
      example: '63df7c861e058751374893da',
    },
    title: {
      type: 'string',
      description: 'The title of the movie',
      example: 'The Godfather',
    },
    releaseYear: {
      type: 'string',
      description: 'The release year of the movie',
      example: 1972,
    },
    actors: {
      type: 'array',
      items: {
        type: 'string',
        description: 'The actors of the movie',
        example: 'Marlon Brando, Al Pacino, James Caan',
      },
    },
    poster: {
      type: 'string',
      description: 'The poster of the movie',
      example:
        'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
    },
  },
};

export const MovieInput = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      description: 'The title of the movie',
      example: 'The Godfather',
    },
    releaseYear: {
      type: 'string',
      description: 'The release year of the movie',
      example: 1972,
    },
    actors: {
      type: 'array',
      items: {
        type: 'string',
        description: 'The actors of the movie',
        example: 'Marlon Brando, Al Pacino, James Caan',
      },
    },
    poster: {
      type: 'string',
      description: 'The poster of the movie',
      example:
        'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
    },
  },
};

export const DeleteResponse = {
  type: 'object',
  properties: {
    acknowledged: {
      type: 'boolean',
      description: 'The status of the deletion',
      example: true,
    },
    deletedCount: {
      type: 'number',
      description: 'The number of deleted documents',
      example: 1,
    },
  },
};

export const Error = {
  description: 'Internal Server Error',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'movies is not defined',
          },
        },
      },
    },
  },
};

export const Unauthorized = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Unauthorized',
          },
        },
      },
    },
  },
};
