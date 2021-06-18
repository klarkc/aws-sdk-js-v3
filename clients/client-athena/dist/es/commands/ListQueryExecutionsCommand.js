import { __extends } from "tslib";
import { ListQueryExecutionsInput, ListQueryExecutionsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListQueryExecutionsCommand,
  serializeAws_json1_1ListQueryExecutionsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a list of available query execution IDs for the queries in the specified
 *             workgroup. If a workgroup is not specified, returns a list of query execution IDs for
 *             the primary workgroup. Requires you to have access to the workgroup in which the queries
 *             ran.</p>
 *         <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListQueryExecutionsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListQueryExecutionsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListQueryExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueryExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListQueryExecutionsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListQueryExecutionsCommand = /** @class */ (function (_super) {
  __extends(ListQueryExecutionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListQueryExecutionsCommand(input) {
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
  ListQueryExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "ListQueryExecutionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListQueryExecutionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListQueryExecutionsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListQueryExecutionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListQueryExecutionsCommand(input, context);
  };
  ListQueryExecutionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListQueryExecutionsCommand(output, context);
  };
  return ListQueryExecutionsCommand;
})($Command);
export { ListQueryExecutionsCommand };
//# sourceMappingURL=ListQueryExecutionsCommand.js.map
