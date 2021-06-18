import { __extends } from "tslib";
import { GetFindingRequest, GetFindingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetFindingCommand,
  serializeAws_restJson1GetFindingCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the specified finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetFindingCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetFindingCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new GetFindingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingCommandInput} for command's `input` shape.
 * @see {@link GetFindingCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFindingCommand = /** @class */ (function (_super) {
  __extends(GetFindingCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetFindingCommand(input) {
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
  GetFindingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "GetFindingCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetFindingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFindingResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetFindingCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetFindingCommand(input, context);
  };
  GetFindingCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetFindingCommand(output, context);
  };
  return GetFindingCommand;
})($Command);
export { GetFindingCommand };
//# sourceMappingURL=GetFindingCommand.js.map
