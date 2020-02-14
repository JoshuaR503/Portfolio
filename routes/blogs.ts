import { Router} from 'express';
import { renderVueBlog, renderFlutterBlog, renderNodeBlog, renderCatalogBlog } from '../controllers/blogs/blog.controller';

const blogRouter: Router = Router();

blogRouter.get('/vue', renderVueBlog);
blogRouter.get('/flutter', renderFlutterBlog);
blogRouter.get('/node', renderNodeBlog);
blogRouter.get('/catalogit', renderCatalogBlog);

export default blogRouter;