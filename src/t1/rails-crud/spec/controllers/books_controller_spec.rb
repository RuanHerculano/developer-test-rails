require 'rails_helper'

RSpec.describe BooksController, type: :controller do
  describe 'GET #index' do
    context 'show all books' do
      let(:book) { create(:book) }

      before do
        get(:index)
      end

      it 'populates an array of books' do
        expect(assigns(:books)).to eq [book]
      end

      it 'renders the :index view' do
        expect(response.body).to render_template :index
      end
    end
  end

  describe 'GET #show' do
    let(:book) { create(:book) }

    before do
      get(:show, params: { id: book.id })
    end


    it 'assigns the requested contact to @book' do
      expect(assigns(:book)).to eq book
    end

    it 'renders the #show view' do
      expect(response).to render_template :show
    end
  end

  describe 'GET new' do
    before do
      get(:new)
    end

    it 'assigns a new book' do
      expect(assigns(:book)).to be_a(Book)
    end

    it 'renders the new book template' do
      expect(response).to render_template(:new)
    end
  end

  describe 'POST create' do
    context 'with valid attributes' do
      let(:valid_book) { build(:book) }

      subject do
        post(:create, params: { book: valid_book.attributes })
      end

      it 'creates a new book' do
        expect {
          subject
        }.to change(Book, :count).by(1)
      end

      it 'redirects to the new contact' do
        expect(subject).to redirect_to Book.last
      end
    end

    context 'with invalid attributes' do
      let(:invalid_book) { build(:book, title: nil) }

      subject do
        post(:create, params: { book: invalid_book.attributes })
      end

      it 'does not save the new contact' do
        expect{
          subject
        }.to_not change(Book,:count)
      end

      it 're-renders the new method' do
        expect(subject).to render_template :new
      end
    end
  end


  describe 'PUT update' do
    context 'valid attributes' do
      let(:build_book) do
        build(
          :book,
          title: 'new title',
          description: 'new description',
          body: 'new body',
          author: 'new author'
        )
      end

      let(:create_book) { create(:book) }

      before do
        put(:update, params: { id: create_book.id, book: build_book.attributes })
      end

      it 'located the requested @book' do
        expect(assigns(:book)).to eq create_book
      end

      it "changes @book's attributes" do
        create_book.reload
        expect(create_book.title).to eq('new title')
        expect(create_book.description).to eq('new description')
        expect(create_book.body).to eq('new body')
        expect(create_book.author).to eq('new author')
      end

      it 'redirects to the updated book' do
        expect(response).to redirect_to create_book
      end
    end

    context 'invalid attributes' do
      let(:invalid_book) { build(:book, title: nil, description: 'new description') }

      let(:create_book) { create(:book) }

      before do
        put(:update, params: { id: create_book.id, book: invalid_book.attributes })
      end

      it 'locates the requested create_book' do
        expect(assigns(:book)).to eq(create_book)
      end

      it "does not change create_book's attributes" do
        create_book.reload
        expect(create_book.body).to eq('body')
        expect(create_book.description).not_to eq('new description')
      end

      it 're-renders the edit method' do
        expect(response).to render_template :edit
      end
    end
  end

  describe 'DELETE destroy' do
    let(:create_book) { create(:book) }

    before do
      create_book
    end

    subject { delete(:destroy, params: { id: create_book.id }) }

    it 'deletes the book' do
      expect{
        subject
      }.to change(Book, :count).by(-1)
    end

    it 'redirects to books#index' do
      expect(subject).to redirect_to books_url
    end
  end
end