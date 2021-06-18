"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTemplateSummaryCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class GetTemplateSummaryCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "GetTemplateSummaryCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.GetTemplateSummaryInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.GetTemplateSummaryOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryGetTemplateSummaryCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryGetTemplateSummaryCommand(output, context);
  }
}
exports.GetTemplateSummaryCommand = GetTemplateSummaryCommand;
//# sourceMappingURL=GetTemplateSummaryCommand.js.map
