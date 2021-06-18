import { __extends } from "tslib";
import { DetachObjectRequest, DetachObjectResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DetachObjectCommand,
  serializeAws_restJson1DetachObjectCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches a given object from the parent object. The object that is to be detached from the
 *       parent is specified by the link name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, DetachObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, DetachObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new DetachObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachObjectCommandInput} for command's `input` shape.
 * @see {@link DetachObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachObjectCommand = /** @class */ (function (_super) {
  __extends(DetachObjectCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DetachObjectCommand(input) {
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
  DetachObjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "DetachObjectCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DetachObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetachObjectResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetachObjectCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DetachObjectCommand(input, context);
  };
  DetachObjectCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DetachObjectCommand(output, context);
  };
  return DetachObjectCommand;
})($Command);
export { DetachObjectCommand };
//# sourceMappingURL=DetachObjectCommand.js.map
