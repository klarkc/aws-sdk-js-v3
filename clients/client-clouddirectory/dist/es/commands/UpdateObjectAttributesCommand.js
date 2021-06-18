import { __extends } from "tslib";
import { UpdateObjectAttributesRequest, UpdateObjectAttributesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateObjectAttributesCommand,
  serializeAws_restJson1UpdateObjectAttributesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a given object's attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, UpdateObjectAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, UpdateObjectAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new UpdateObjectAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateObjectAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateObjectAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateObjectAttributesCommand = /** @class */ (function (_super) {
  __extends(UpdateObjectAttributesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateObjectAttributesCommand(input) {
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
  UpdateObjectAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "UpdateObjectAttributesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateObjectAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateObjectAttributesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateObjectAttributesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateObjectAttributesCommand(input, context);
  };
  UpdateObjectAttributesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateObjectAttributesCommand(output, context);
  };
  return UpdateObjectAttributesCommand;
})($Command);
export { UpdateObjectAttributesCommand };
//# sourceMappingURL=UpdateObjectAttributesCommand.js.map
