import { __extends } from "tslib";
import { CreateNamedQueryInput, CreateNamedQueryOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateNamedQueryCommand,
  serializeAws_json1_1CreateNamedQueryCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a named query in the specified workgroup. Requires that you have access to the
 *             workgroup.</p>
 *         <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreateNamedQueryCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreateNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new CreateNamedQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNamedQueryCommandInput} for command's `input` shape.
 * @see {@link CreateNamedQueryCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNamedQueryCommand = /** @class */ (function (_super) {
  __extends(CreateNamedQueryCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateNamedQueryCommand(input) {
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
  CreateNamedQueryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AthenaClient";
    var commandName = "CreateNamedQueryCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateNamedQueryInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateNamedQueryOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateNamedQueryCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateNamedQueryCommand(input, context);
  };
  CreateNamedQueryCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateNamedQueryCommand(output, context);
  };
  return CreateNamedQueryCommand;
})($Command);
export { CreateNamedQueryCommand };
//# sourceMappingURL=CreateNamedQueryCommand.js.map
