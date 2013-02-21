module Cms
  class InlineContentController < Cms::BaseController
    respond_to :json

    def update
      content = Content.find(params[:content_name], params[:id])
      content.update_attributes(params[:content])
      @page = Page.find_draft(params[:page_id])
      if (!@page.live?)
        @page_status = "label label-important"
        @status_label = "DRAFT"
        @enable_publish = true
      else
        @page_status = "label label-success"
        @status_label = "Published"
        @enable_publish = false
      end
      render layout: false
    end
  end
end