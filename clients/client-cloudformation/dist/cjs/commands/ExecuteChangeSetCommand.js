"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteChangeSetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates a stack using the input information that was provided when the specified
 *          change set was created. After the call successfully completes, AWS CloudFormation starts
 *          updating the stack. Use the <a>DescribeStacks</a> action to view the status of
 *          the update.</p>
 *          <p>When you execute a change set, AWS CloudFormation deletes all other change sets
 *          associated with the stack because they aren't valid for the updated stack.</p>
 *          <p>If a stack policy is associated with the stack, AWS CloudFormation enforces the
 *          policy during the update. You can't specify a temporary stack policy that overrides the
 *          current policy.</p>
 *          <p>To create a change set for the entire stack hierachy, <code>IncludeNestedStacks</code>
 *          must have been set to <code>True</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ExecuteChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ExecuteChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ExecuteChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteChangeSetCommandInput} for command's `input` shape.
 * @see {@link ExecuteChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ExecuteChangeSetCommand extends smithy_client_1.Command {
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
    const commandName = "ExecuteChangeSetCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.ExecuteChangeSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.ExecuteChangeSetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryExecuteChangeSetCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryExecuteChangeSetCommand(output, context);
  }
}
exports.ExecuteChangeSetCommand = ExecuteChangeSetCommand;
//# sourceMappingURL=ExecuteChangeSetCommand.js.map
