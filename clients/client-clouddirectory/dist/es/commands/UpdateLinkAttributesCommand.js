import { __extends } from "tslib";
import { UpdateLinkAttributesRequest, UpdateLinkAttributesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateLinkAttributesCommand,
  serializeAws_restJson1UpdateLinkAttributesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, UpdateLinkAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, UpdateLinkAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new UpdateLinkAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLinkAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateLinkAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLinkAttributesCommand = /** @class */ (function (_super) {
  __extends(UpdateLinkAttributesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateLinkAttributesCommand(input) {
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
  UpdateLinkAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "UpdateLinkAttributesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateLinkAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateLinkAttributesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateLinkAttributesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateLinkAttributesCommand(input, context);
  };
  UpdateLinkAttributesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateLinkAttributesCommand(output, context);
  };
  return UpdateLinkAttributesCommand;
})($Command);
export { UpdateLinkAttributesCommand };
//# sourceMappingURL=UpdateLinkAttributesCommand.js.map
