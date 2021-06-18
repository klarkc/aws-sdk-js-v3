import { __extends } from "tslib";
import { DeleteNamedQueryInput, DeleteNamedQueryOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteNamedQueryCommand,
  serializeAws_json1_1DeleteNamedQueryCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the named query if you have access to the workgroup in which the query was
 *             saved.</p>
 *         <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, DeleteNamedQueryCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, DeleteNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new DeleteNamedQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNamedQueryCommandInput} for command's `input` shape.
 * @see {@link DeleteNamedQueryCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNamedQueryCommand = /** @class */ (function (_super) {
  __extends(DeleteNamedQueryCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteNamedQueryCommand(input) {
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
  DeleteNamedQueryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "DeleteNamedQueryCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteNamedQueryInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteNamedQueryOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteNamedQueryCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteNamedQueryCommand(input, context);
  };
  DeleteNamedQueryCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteNamedQueryCommand(output, context);
  };
  return DeleteNamedQueryCommand;
})($Command);
export { DeleteNamedQueryCommand };
//# sourceMappingURL=DeleteNamedQueryCommand.js.map
