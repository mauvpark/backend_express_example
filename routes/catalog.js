const express = require("express");
const router = express.Router();

// Require controller modules.
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

const BOOK = "book";
const BOOKS = "books";
const AUTHOR = "author";
const AUTHORS = "authors";
const GENRE = "genre";
const GENRES = "genres";
const BOOKINSTANCE = "bookinstance";
const BOOKINSTANCES = "bookinstances";

const CREATE = "create";
const UPDATE = "update";
const DELETE = "delete";

const ID = "id";

// ROUTES 배치 기준
// 1. index 페이지가 가장 앞에 오게 한다.
// 2. 같은 분류 기준 구체성을 띈 URL이 추상적인 URL보다 먼저 오게 한다. 추상적인 URL이 앞에 올 경우, 구체성을 띈 URL보다 우선 순위가 앞이므로 구체성을 띈 URL이 실행되지 않는다.
// 3. 추상적인 URL 중에서도 보다 구체성을 띈 URL이 먼저 배치 되도록 한다.

/// BOOK ROUTES ///

// Get catalog home page.
router.get("/", book_controller.index);

// Get request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get(`/${BOOK}/${CREATE}`, book_controller.book_create_get);

// POST request for creating Book.
router.post(`/${BOOK}/${CREATE}`, book_controller.book_create_post);

// GET request to delete Book.
router.get(`/${BOOK}/:${ID}/${DELETE}`, book_controller.book_delete_get);

// POST request to delete Book.
router.post(`/${BOOK}/:${ID}/${DELETE}`, book_controller.book_delete_post);

// GET request to update Book.
router.get(`/${BOOK}/:${ID}/${UPDATE}`, book_controller.book_update_get);

// POST request to update Book.
router.post(`/${BOOK}/:${ID}/${UPDATE}`, book_controller.book_update_post);

// GET request for one Book.
router.get(`/${BOOK}/:${ID}`, book_controller.book_detail);

// GET request for list of all Book items.
router.get(`/${BOOKS}`, book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get(`/${AUTHOR}/${CREATE}`, author_controller.author_create_get);

// POST request for creating Author.
router.post(`/${AUTHOR}/${CREATE}`, author_controller.author_create_post);

// GET request to delete Author.
router.get(`/${AUTHOR}/:${ID}/${DELETE}`, author_controller.author_delete_get);

// POST request to delete Author.
router.post(
  `/${AUTHOR}/:${ID}/${DELETE}`,
  author_controller.author_delete_post
);

// GET request to update Author.
router.get(`/${AUTHOR}/:${ID}/${UPDATE}`, author_controller.author_update_get);

// POST request to update Author.
router.post(
  `/${AUTHOR}/:${ID}/${UPDATE}`,
  author_controller.author_update_post
);

// GET request for one Author.
router.get(`/${AUTHOR}/:${ID}`, author_controller.author_detail);

// GET request for list of all Authors.
router.get(`/${AUTHORS}`, author_controller.author_list);

/// GENRE ROUTES ///

// GET request for create a Genre. NOTE This must come before route that displays Genre (uses id).
router.get(`/${GENRE}/${CREATE}`, genre_controller.genre_create_get);

// POST request for creating Genre.
router.post(`/${GENRE}/${CREATE}`, genre_controller.genre_create_post);

// GET request to delete Genre.
router.get(`/${GENRE}/:${ID}/${DELETE}`, genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post(`/${GENRE}/:${ID}/${DELETE}`, genre_controller.genre_delete_post);

// GET request to update Genre.
router.get(`/${GENRE}/:${ID}/${UPDATE}`, genre_controller.genre_update_get);

// POST request to update Genre.
router.post(`/${GENRE}/:${ID}/${UPDATE}`, genre_controller.genre_update_post);

// GET request for one Genre.
router.get(`/${GENRE}/:${ID}`, genre_controller.genre_detail);

// GET request for list of all Genre.
router.get(`/${GENRES}`, genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// Get request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get(
  `/${BOOKINSTANCE}/${CREATE}`,
  book_instance_controller.bookinstance_create_get
);

// POST request for creating BookInstance.
router.post(
  `/${BOOKINSTANCE}/${CREATE}`,
  book_instance_controller.bookinstance_create_post
);

// GET request to delete BookInstance.
router.get(
  `/${BOOKINSTANCE}/:${ID}/${DELETE}`,
  book_instance_controller.bookinstance_delete_get
);

// POST request to delete BookInstance.
router.post(
  `/${BOOKINSTANCE}/:${ID}/${DELETE}`,
  book_instance_controller.bookinstance_delete_post
);

// GET request to update BookInstance.
router.get(
  `/${BOOKINSTANCE}/:${ID}/${UPDATE}`,
  book_instance_controller.bookinstance_update_get
);

// POST request to update BookInstance.
router.post(
  `/${BOOKINSTANCE}/:${ID}/${UPDATE}`,
  book_instance_controller.bookinstance_update_post
);

// GET request for one BookInstance.
router.get(
  `/${BOOKINSTANCE}/:${ID}`,
  book_instance_controller.bookinstance_detail
);

// GET request for list of all BookInstance.
router.get(`/${BOOKINSTANCES}`, book_instance_controller.bookinstance_list);

module.exports = router;
