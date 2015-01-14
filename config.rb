# Require any additional compass plugins here.
# require 'animation'

http_path = "/"
css_dir = "global"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "js"

preferred_syntax = :scss

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
output_style = :expanded
#output_style = :compressed

# Replace in stylesheets generated references to sprites
# by their counterparts without the hash uniqueness.
on_stylesheet_saved do |filename|
  if File.exists?(filename)
    css = File.read filename
    File.open(filename, 'w+') do |f|
      f << css.gsub(%r{(?<start>-s)(?<hash>[a-z0-9]{10})(?<file>\.png)}, '.png?v=\k<hash>')
    end
  end
end
