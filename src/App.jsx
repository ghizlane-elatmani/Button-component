import Button from "./components/Button";
import "./App.css";

import { MdAddShoppingCart } from "react-icons/md";
import { MdCloudDownload } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import { MdArrowRightAlt } from "react-icons/md";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <h1>Buttons</h1>

      <div className="card">
        <div className="wrapper">
          <p>{"<Button />"}</p>
          <Button />
        </div>

        <div className="wrapper">
          <p>{"<Button variant='outline'/>"}</p>
          <Button variant="outline" />
        </div>

        <div className="wrapper">
          <p>{"<Button variant='text' />"}</p>
          <Button variant="text" />
        </div>
      </div>

      {/* === DISABLED SHADOW === */}
      <div className="card">
        <div className="wrapper">
          <p>{"<Button disabledShadow />"}</p>
          <Button disabledShadow={true} />
        </div>
      </div>

      {/* === DISABLED === */}
      <div className="card">
        <div className="wrapper">
          <p>{"<Button disabled />"}</p>
          <Button children="Disabled" disabled={true} />
        </div>

        <div className="wrapper">
          <p>{"<Button variant=”text” disabled />"}</p>
          <Button children="Disabled" variant="text" disabled={true} />
        </div>
      </div>

      {/* === ICONS === */}
      <div className="card card-icon">
        <div className="wrapper">
          <p>{"<Button startIcon={<MdAddShoppingCart />} />"}</p>
          <Button startIcon={<MdAddShoppingCart />} color="primary" />
        </div>

        <div className="wrapper">
          <p>{"<Button endIcon={<MdAddShoppingCart />} />"}</p>
          <Button endIcon={<MdAddShoppingCart />} color="primary" />
        </div>

        <div className="wrapper">
          <Button
            children="Download"
            startIcon={<MdCloudDownload />}
            color="primary"
          />
        </div>

        <div className="wrapper">
          <Button
            children="Download"
            endIcon={<MdCloudDownload />}
            color="primary"
          />
        </div>

        <div className="wrapper">
          <Button children="Account" startIcon={<MdPerson />} color="primary" />
        </div>

        <div className="wrapper">
          <Button children="Account" endIcon={<MdPerson />} color="primary" />
        </div>

        <div className="wrapper">
          <Button
            children="Like"
            startIcon={<MdOutlineThumbUpOffAlt />}
            color="primary"
          />
        </div>

        <div className="wrapper">
          <Button
            children="Like"
            endIcon={<MdOutlineThumbUpOffAlt />}
            color="primary"
          />
        </div>

        <div className="wrapper">
          <Button
            children="Learn More"
            startIcon={<MdArrowRightAlt />}
            color="primary"
          />
        </div>

        <div className="wrapper">
          <Button
            children="Learn More"
            endIcon={<MdArrowRightAlt />}
            color="primary"
          />
        </div>
      </div>

      {/* === SIZE === */}
      <div className="card">
        <div className="wrapper">
          <p>{"<Button size=”sm” />"}</p>
          <Button color="primary" size={"sm"} />
        </div>

        <div className="wrapper">
          <p>{"<Button size=”md” />"}</p>
          <Button color="primary" size={"md"} />
        </div>

        <div className="wrapper">
          <p>{"<Button size=”lg” />"}</p>
          <Button color="primary" size={"lg"} />
        </div>
      </div>

      {/* === COLOR === */}
      <div className="card">
        <div className="wrapper">
          <p>{"<Button color=”default” />"}</p>
          <Button color="default" />
        </div>

        <div className="wrapper">
          <p>{"<Button color=”primary” />"}</p>
          <Button color="primary" />
        </div>

        <div className="wrapper">
          <p>{"<Button color=”secondary” />"}</p>
          <Button children="Secondary" color="secondary" />
        </div>

        <div className="wrapper">
          <p>{"<Button color=”danger” />"}</p>
          <Button children="Danger" color="danger" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
