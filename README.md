

**Here's the live project Link - https://terribly-tiny-tales-umang-12018505.netlify.app/**



**Here's My ScreenShot for the App** 

<img width="573" alt="t" src="https://github.com/Umang7725/Word-Frequency-Terribly-Tiny-Tales/assets/100988384/fa8b7910-f8fa-4ef6-9252-650d8fbe06d7">

  Here's a brief explanation of the code:

The code imports the required dependencies such as React, useState for managing state, Papa for CSV parsing, lodash for data manipulation, and the Histogram component.

The App function component is defined. It initializes the data state using the useState hook.

The handleSubmit function is an asynchronous function that fetches text data from the provided URL (https://www.terriblytinytales.com/test.txt). It splits the content into individual words, counts the occurrences of each word using lodash's countBy function, sorts the word counts in descending order, and selects the top 20 words. The resulting data is set in the component state using setData.

The handleExport function is triggered when the "Export" button is clicked. It converts the data state into a CSV format using Papa's unparse function. It creates a Blob object from the CSV data, generates a download URL for the blob, and appends a link with the URL to the document body. Finally, it programmatically clicks the link to initiate the download.

<!-- The App component returns JSX code to render the application. It includes an <h1> heading, a container <div>, and a box <div>. -->

Inside the box <div>, there is a "Submit" button that triggers the handleSubmit function when clicked. If the data state is not null, it renders the Histogram component passing the data as a prop. It also renders an "Export" button that triggers the handleExport function when clicked.

The Histogram component is defined separately. It receives the data prop and renders a bar chart using the BarChart, Bar, XAxis, and YAxis components from the recharts library. The data prop is used to populate the chart data.

The App component is exported as the default export.

The Histogram component is also exported as the default export.

<img width="949" alt="t1" src="https://github.com/Umang7725/Word-Frequency-Terribly-Tiny-Tales/assets/100988384/12926aa9-d1c0-4c77-9d8d-4f1fa0e88e07">





