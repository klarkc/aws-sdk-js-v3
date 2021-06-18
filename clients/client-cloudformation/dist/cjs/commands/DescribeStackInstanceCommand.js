"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeStackInstanceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the stack instance that's associated with the specified stack set, AWS
 *          account, and Region.</p>
 *          <p>For a list of stack instances that are associated with a specific stack set, use
 *             <a>ListStackInstances</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackInstanceCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackInstanceCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeStackInstanceCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeStackInstanceCommand extends smithy_client_1.Command {
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
    const commandName = "DescribeStackInstanceCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DescribeStackInstanceInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DescribeStackInstanceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryDescribeStackInstanceCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryDescribeStackInstanceCommand(output, context);
  }
}
exports.DescribeStackInstanceCommand = DescribeStackInstanceCommand;
//# sourceMappingURL=DescribeStackInstanceCommand.js.map
