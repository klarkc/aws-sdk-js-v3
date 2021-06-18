"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStackInstancesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the parameter values for stack instances for the specified accounts, within
 *          the specified Regions. A stack instance refers to a stack in a specific account and Region. </p>
 *          <p>You can only update stack instances in Regions and accounts where they already exist;
 *          to create additional stack instances, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html">CreateStackInstances</a>. </p>
 *          <p>During stack set updates, any parameters overridden for a stack instance are not
 *          updated, but retain their overridden value.</p>
 *          <p>You can only update the parameter <i>values</i> that are specified in
 *          the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template. If you add a parameter to a
 *          template, before you can override the parameter value specified in the stack set you must
 *          first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and
 *          parameter value specified in the stack set. Once a stack instance has been updated with the
 *          new parameter, you can then override the parameter value using
 *             <code>UpdateStackInstances</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateStackInstancesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateStackInstancesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new UpdateStackInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStackInstancesCommandInput} for command's `input` shape.
 * @see {@link UpdateStackInstancesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateStackInstancesCommand extends smithy_client_1.Command {
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
    const commandName = "UpdateStackInstancesCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.UpdateStackInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.UpdateStackInstancesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryUpdateStackInstancesCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryUpdateStackInstancesCommand(output, context);
  }
}
exports.UpdateStackInstancesCommand = UpdateStackInstancesCommand;
//# sourceMappingURL=UpdateStackInstancesCommand.js.map
