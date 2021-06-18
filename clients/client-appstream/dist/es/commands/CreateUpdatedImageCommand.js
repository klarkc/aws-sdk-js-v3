import { __extends } from "tslib";
import { CreateUpdatedImageRequest, CreateUpdatedImageResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateUpdatedImageCommand,
  serializeAws_json1_1CreateUpdatedImageCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p>
 *
 *         <p>For more information, see the "Update an Image by Using
 *             Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateUpdatedImageCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateUpdatedImageCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateUpdatedImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUpdatedImageCommandInput} for command's `input` shape.
 * @see {@link CreateUpdatedImageCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUpdatedImageCommand = /** @class */ (function (_super) {
  __extends(CreateUpdatedImageCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateUpdatedImageCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  CreateUpdatedImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "CreateUpdatedImageCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateUpdatedImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateUpdatedImageResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateUpdatedImageCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateUpdatedImageCommand(input, context);
  };
  CreateUpdatedImageCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateUpdatedImageCommand(output, context);
  };
  return CreateUpdatedImageCommand;
})($Command);
export { CreateUpdatedImageCommand };
//# sourceMappingURL=CreateUpdatedImageCommand.js.map
