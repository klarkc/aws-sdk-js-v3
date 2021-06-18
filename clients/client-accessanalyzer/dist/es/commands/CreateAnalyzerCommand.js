import { __extends } from "tslib";
import { CreateAnalyzerRequest, CreateAnalyzerResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAnalyzerCommand,
  serializeAws_restJson1CreateAnalyzerCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an analyzer for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CreateAnalyzerCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CreateAnalyzerCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new CreateAnalyzerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAnalyzerCommandInput} for command's `input` shape.
 * @see {@link CreateAnalyzerCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAnalyzerCommand = /** @class */ (function (_super) {
  __extends(CreateAnalyzerCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateAnalyzerCommand(input) {
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
  CreateAnalyzerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "CreateAnalyzerCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateAnalyzerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAnalyzerResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateAnalyzerCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateAnalyzerCommand(input, context);
  };
  CreateAnalyzerCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateAnalyzerCommand(output, context);
  };
  return CreateAnalyzerCommand;
})($Command);
export { CreateAnalyzerCommand };
//# sourceMappingURL=CreateAnalyzerCommand.js.map
