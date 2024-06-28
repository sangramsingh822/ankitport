import os

# Function to generate the image module JavaScript file
def generate_image_module(image_folder, output_file):
    # Construct the full path to the image folder
    full_image_folder = os.path.join(os.path.dirname(__file__), image_folder)

    # List all files in the directory
    files = os.listdir(full_image_folder)

    # Filter out only image files (assuming jpg, jpeg, png, gif)
    image_files = [f for f in files if f.lower().endswith(('.jpg', '.jpeg', '.png', '.gif'))]

    # Generate import statements with indexed names
    import_statements = []
    for index, file in enumerate(image_files, start=1):
        file_name = os.path.splitext(file)[0]  # Extract filename without extension
        import_statements.append(f'import {index} from "{image_folder}/{file}";')

    # Generate export statements (using indexed names)
    export_statements = ',\n'.join([str(index) for index in range(1, len(image_files) + 1)])

    # Create the content of the output file
    content = f"""\
{"".join(import_statements)}

export {{
  {export_statements}
}};
"""

    # Write to the output file
    output_path = os.path.join(os.path.dirname(__file__), output_file)
    with open(output_path, 'w') as f:
        f.write(content)

    print(f"Image module generated successfully at {output_path}")




image_folder = './poster'  # Adjust this to your actual image folder
output_file = './imageMod3ule.js'  # Adjust this to your desired output file

# Call the function to generate the image module
generate_image_module(image_folder, output_file)
