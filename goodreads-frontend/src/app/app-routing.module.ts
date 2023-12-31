import { AddcategoryComponent } from './admin/category/addcategory/addcategory.component';
import { CategoryComponent } from './admin/category/category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './register/login/login.component';
import { ListBooksComponent } from './list-books/list-books/list-books.component';
import { SignupComponent } from './register/signup/signup.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AddBooksComponent } from './admin/books/add-books/add-books.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ExploreComponent } from './explore/explore.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BooksComponent } from './admin/books/books.component';
import { EditBooksComponent } from './admin/books/edit-books/edit-books.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authAdminGuard } from './guards/auth-admin.guard';
import { AuthorsComponent } from './admin/authors/authors.component';
import { AddAuthorsComponent } from './admin/authors/add-authors/add-authors.component';
import { EditAuthorsComponent } from './admin/authors/edit-authors/edit-authors.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EidtcategoryComponent } from './admin/category/eidtcategory/eidtcategory.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryCollectionComponent } from './categories/category-collection/category-collection.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "explore",
    component: ExploreComponent
  },
  {
    path: "home",
    component: ListBooksComponent
  },
  {
    path: "book",
    component: BookPageComponent
  },
  {
    path: "details/:id",
    component: BooksDetailsComponent
  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "categories/:id",
    component: CategoryCollectionComponent
  },
  {
    path: "author",
    component: AuthorDetailsComponent
  },
  {
    path: "allauthors",
    component: ListUsersComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "admin/login", component: AdminLoginComponent,
    canActivate: [authAdminGuard]
  },
  {
    path: "admin/books",
    component: BooksComponent,
    canActivate: [authAdminGuard]
  },
  {
    path: "admin/books/add",
    component: AddBooksComponent,
    canActivate: [authAdminGuard]
  },
  {
    path: "admin/books/edit/:id",
    component: EditBooksComponent,
    canActivate: [authAdminGuard]
  },
  {
    path: "admin/dashboard",
    component: DashboardComponent,
    canActivate: [authAdminGuard]
  },
  {
    path: "admin/category",
    component: CategoryComponent,
    canActivate: [authAdminGuard]
  },
  {
    path: "admin/category/add",
    component: AddcategoryComponent,
    canActivate: [authAdminGuard]
  },
  {
    path: "admin/category/edit/:id",
    component: EidtcategoryComponent,
    canActivate: [authAdminGuard]
  },
  {
    path: "admin/authors",
    component: AuthorsComponent,
    canActivate: [authAdminGuard]
  },
  {
    path: "admin/authors/add",
    component: AddAuthorsComponent,
    canActivate: [authAdminGuard]
  },
  {
    path: "admin/authors/edit/:id",
    component: EditAuthorsComponent,
    canActivate: [authAdminGuard]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
