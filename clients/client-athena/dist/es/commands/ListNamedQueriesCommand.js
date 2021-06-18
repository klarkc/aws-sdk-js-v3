import { __extends } from "tslib";
import { ListNamedQueriesInput, ListNamedQueriesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListNamedQueriesCommand,
  serializeAws_json1_1ListNamedQueriesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a list of available query IDs only for queries saved in the specified
 *             workgroup. Requires that you have access to the specified workgroup. If a workgroup is
 *             not specified, lists the saved queries for the primary workgroup.</p>
 *         <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListNamedQueriesCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListNamedQueriesCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListNamedQueriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNamedQueriesCommandInput} for command's `input` shape.
 * @see {@link ListNamedQueriesCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListNamedQueriesCommand = /** @class */ (function (_super) {
  __extends(ListNamedQueriesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListNamedQueriesCommand(input) {
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
  ListNamedQueriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "ListNamedQueriesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListNamedQueriesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListNamedQueriesOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListNamedQueriesCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListNamedQueriesCommand(input, context);
  };
  ListNamedQueriesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListNamedQueriesCommand(output, context);
  };
  return ListNamedQueriesCommand;
})($Command);
export { ListNamedQueriesCommand };
//# sourceMappingURL=ListNamedQueriesCommand.js.map
