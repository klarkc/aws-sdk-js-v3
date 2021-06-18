import { __extends } from "tslib";
import { StartQueryExecutionInput, StartQueryExecutionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StartQueryExecutionCommand,
  serializeAws_json1_1StartQueryExecutionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Runs the SQL query statements contained in the <code>Query</code>. Requires you to
 *             have access to the workgroup in which the query ran. Running queries against an external
 *             catalog requires <a>GetDataCatalog</a> permission to the catalog. For code
 *             samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StartQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StartQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new StartQueryExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link StartQueryExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartQueryExecutionCommand = /** @class */ (function (_super) {
  __extends(StartQueryExecutionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartQueryExecutionCommand(input) {
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
  StartQueryExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "StartQueryExecutionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartQueryExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartQueryExecutionOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartQueryExecutionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1StartQueryExecutionCommand(input, context);
  };
  StartQueryExecutionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1StartQueryExecutionCommand(output, context);
  };
  return StartQueryExecutionCommand;
})($Command);
export { StartQueryExecutionCommand };
//# sourceMappingURL=StartQueryExecutionCommand.js.map
