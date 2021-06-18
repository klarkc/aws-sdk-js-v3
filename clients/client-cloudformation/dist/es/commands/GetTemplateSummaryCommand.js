import { __extends } from "tslib";
import { GetTemplateSummaryInput, GetTemplateSummaryOutput } from "../models/models_0";
import {
  deserializeAws_queryGetTemplateSummaryCommand,
  serializeAws_queryGetTemplateSummaryCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a new or existing template. The
 *             <code>GetTemplateSummary</code> action is useful for viewing parameter information, such
 *          as default parameter values and parameter types, before you create or update a stack or
 *          stack set.</p>
 *          <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or
 *          you can get template information for a stack set, or a running or deleted stack.</p>
 *          <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information
 *          for up to 90 days after the stack has been deleted. If the template does not exist, a
 *             <code>ValidationError</code> is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, GetTemplateSummaryCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, GetTemplateSummaryCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new GetTemplateSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTemplateSummaryCommandInput} for command's `input` shape.
 * @see {@link GetTemplateSummaryCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTemplateSummaryCommand = /** @class */ (function (_super) {
  __extends(GetTemplateSummaryCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetTemplateSummaryCommand(input) {
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
  GetTemplateSummaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "GetTemplateSummaryCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetTemplateSummaryInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetTemplateSummaryOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetTemplateSummaryCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryGetTemplateSummaryCommand(input, context);
  };
  GetTemplateSummaryCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryGetTemplateSummaryCommand(output, context);
  };
  return GetTemplateSummaryCommand;
})($Command);
export { GetTemplateSummaryCommand };
//# sourceMappingURL=GetTemplateSummaryCommand.js.map
