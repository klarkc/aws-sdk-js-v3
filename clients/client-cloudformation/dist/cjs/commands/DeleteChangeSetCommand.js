"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteChangeSetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the specified change set. Deleting change sets ensures that no one executes
 *          the wrong change set.</p>
 *          <p>If the call successfully completes, AWS CloudFormation successfully deleted the
 *          change set.</p>
 *          <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of
 *          the nested change set, then <code>DeleteChangeSet</code> will delete all change sets that belong to the stacks hierarchy and
 *           will also delete all change sets for nested stacks with the status of <code>REVIEW_IN_PROGRESS</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DeleteChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteChangeSetCommandInput} for command's `input` shape.
 * @see {@link DeleteChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteChangeSetCommand extends smithy_client_1.Command {
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
    const commandName = "DeleteChangeSetCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DeleteChangeSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DeleteChangeSetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryDeleteChangeSetCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryDeleteChangeSetCommand(output, context);
  }
}
exports.DeleteChangeSetCommand = DeleteChangeSetCommand;
//# sourceMappingURL=DeleteChangeSetCommand.js.map
