import { __extends } from "tslib";
import { GetBackendJobRequest, GetBackendJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackendJobCommand,
  serializeAws_restJson1GetBackendJobCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetBackendJobCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetBackendJobCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new GetBackendJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackendJobCommandInput} for command's `input` shape.
 * @see {@link GetBackendJobCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBackendJobCommand = /** @class */ (function (_super) {
  __extends(GetBackendJobCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetBackendJobCommand(input) {
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
  GetBackendJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "GetBackendJobCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetBackendJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackendJobResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetBackendJobCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetBackendJobCommand(input, context);
  };
  GetBackendJobCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetBackendJobCommand(output, context);
  };
  return GetBackendJobCommand;
})($Command);
export { GetBackendJobCommand };
//# sourceMappingURL=GetBackendJobCommand.js.map
