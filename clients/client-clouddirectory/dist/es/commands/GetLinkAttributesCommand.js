import { __extends } from "tslib";
import { GetLinkAttributesRequest, GetLinkAttributesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetLinkAttributesCommand,
  serializeAws_restJson1GetLinkAttributesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves attributes that are associated with a typed link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetLinkAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetLinkAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetLinkAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLinkAttributesCommandInput} for command's `input` shape.
 * @see {@link GetLinkAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLinkAttributesCommand = /** @class */ (function (_super) {
  __extends(GetLinkAttributesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetLinkAttributesCommand(input) {
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
  GetLinkAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "GetLinkAttributesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetLinkAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLinkAttributesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetLinkAttributesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetLinkAttributesCommand(input, context);
  };
  GetLinkAttributesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetLinkAttributesCommand(output, context);
  };
  return GetLinkAttributesCommand;
})($Command);
export { GetLinkAttributesCommand };
//# sourceMappingURL=GetLinkAttributesCommand.js.map
