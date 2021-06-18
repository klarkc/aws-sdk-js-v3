import { __extends } from "tslib";
import { StopQueryExecutionInput, StopQueryExecutionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StopQueryExecutionCommand,
  serializeAws_json1_1StopQueryExecutionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a query execution. Requires you to have access to the workgroup in which the
 *             query ran.</p>
 *         <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StopQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StopQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new StopQueryExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link StopQueryExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopQueryExecutionCommand = /** @class */ (function (_super) {
  __extends(StopQueryExecutionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StopQueryExecutionCommand(input) {
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
  StopQueryExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "StopQueryExecutionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StopQueryExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: StopQueryExecutionOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StopQueryExecutionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1StopQueryExecutionCommand(input, context);
  };
  StopQueryExecutionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1StopQueryExecutionCommand(output, context);
  };
  return StopQueryExecutionCommand;
})($Command);
export { StopQueryExecutionCommand };
//# sourceMappingURL=StopQueryExecutionCommand.js.map
