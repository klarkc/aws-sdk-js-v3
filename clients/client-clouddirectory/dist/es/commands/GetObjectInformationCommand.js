import { __extends } from "tslib";
import { GetObjectInformationRequest, GetObjectInformationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetObjectInformationCommand,
  serializeAws_restJson1GetObjectInformationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves metadata about an object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetObjectInformationCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetObjectInformationCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetObjectInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectInformationCommandInput} for command's `input` shape.
 * @see {@link GetObjectInformationCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetObjectInformationCommand = /** @class */ (function (_super) {
  __extends(GetObjectInformationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetObjectInformationCommand(input) {
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
  GetObjectInformationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "GetObjectInformationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetObjectInformationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetObjectInformationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetObjectInformationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetObjectInformationCommand(input, context);
  };
  GetObjectInformationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetObjectInformationCommand(output, context);
  };
  return GetObjectInformationCommand;
})($Command);
export { GetObjectInformationCommand };
//# sourceMappingURL=GetObjectInformationCommand.js.map
