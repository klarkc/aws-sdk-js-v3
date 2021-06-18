"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChangeSetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a list of changes that will be applied to a stack so that you can review the
 *          changes before executing them. You can create a change set for a stack that doesn't exist
 *          or an existing stack. If you create a change set for a stack that doesn't exist, the change
 *          set shows all of the resources that AWS CloudFormation will create. If you create a change
 *          set for an existing stack, AWS CloudFormation compares the stack's information with the
 *          information that you submit in the change set and lists the differences. Use change sets to
 *          understand which resources AWS CloudFormation will create or change, and how it will change
 *          resources in an existing stack, before you create or update a stack.</p>
 *          <p>To create a change set for a stack that doesn't exist, for the
 *             <code>ChangeSetType</code> parameter, specify <code>CREATE</code>. To create a change
 *          set for an existing stack, specify <code>UPDATE</code> for the <code>ChangeSetType</code>
 *          parameter. To create a change set for an import operation, specify <code>IMPORT</code> for
 *          the <code>ChangeSetType</code> parameter. After the <code>CreateChangeSet</code> call
 *          successfully completes, AWS CloudFormation starts creating the change set. To check the
 *          status of the change set or to review it, use the <a>DescribeChangeSet</a>
 *          action.</p>
 *          <p>When you are satisfied with the changes the change set will make, execute the change
 *          set by using the <a>ExecuteChangeSet</a> action. AWS CloudFormation doesn't make
 *          changes until you execute the change set.</p>
 *          <p>To create a change set for the entire stack hierachy, set
 *          <code>IncludeNestedStacks</code> to <code>True</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CreateChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, CreateChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new CreateChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateChangeSetCommandInput} for command's `input` shape.
 * @see {@link CreateChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateChangeSetCommand extends smithy_client_1.Command {
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
    const commandName = "CreateChangeSetCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.CreateChangeSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.CreateChangeSetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryCreateChangeSetCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryCreateChangeSetCommand(output, context);
  }
}
exports.CreateChangeSetCommand = CreateChangeSetCommand;
//# sourceMappingURL=CreateChangeSetCommand.js.map
