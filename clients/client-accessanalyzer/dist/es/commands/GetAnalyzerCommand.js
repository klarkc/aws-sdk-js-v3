import { __extends } from "tslib";
import { GetAnalyzerRequest, GetAnalyzerResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetAnalyzerCommand,
  serializeAws_restJson1GetAnalyzerCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the specified analyzer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetAnalyzerCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetAnalyzerCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new GetAnalyzerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAnalyzerCommandInput} for command's `input` shape.
 * @see {@link GetAnalyzerCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAnalyzerCommand = /** @class */ (function (_super) {
  __extends(GetAnalyzerCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetAnalyzerCommand(input) {
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
  GetAnalyzerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "GetAnalyzerCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetAnalyzerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAnalyzerResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetAnalyzerCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetAnalyzerCommand(input, context);
  };
  GetAnalyzerCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetAnalyzerCommand(output, context);
  };
  return GetAnalyzerCommand;
})($Command);
export { GetAnalyzerCommand };
//# sourceMappingURL=GetAnalyzerCommand.js.map
