import { __extends } from "tslib";
import { GenerateAccessLogsRequest, GenerateAccessLogsResult } from "../models/models_0";
import {
  deserializeAws_restJson1GenerateAccessLogsCommand,
  serializeAws_restJson1GenerateAccessLogsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns the website access logs for a specific time range using a presigned URL.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GenerateAccessLogsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GenerateAccessLogsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new GenerateAccessLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateAccessLogsCommandInput} for command's `input` shape.
 * @see {@link GenerateAccessLogsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GenerateAccessLogsCommand = /** @class */ (function (_super) {
  __extends(GenerateAccessLogsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GenerateAccessLogsCommand(input) {
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
  GenerateAccessLogsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "GenerateAccessLogsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GenerateAccessLogsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GenerateAccessLogsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GenerateAccessLogsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GenerateAccessLogsCommand(input, context);
  };
  GenerateAccessLogsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GenerateAccessLogsCommand(output, context);
  };
  return GenerateAccessLogsCommand;
})($Command);
export { GenerateAccessLogsCommand };
//# sourceMappingURL=GenerateAccessLogsCommand.js.map
