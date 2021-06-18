"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAutoScalingConfigurationsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of AWS App Runner automatic scaling configurations in your AWS account. You can query the revisions for a specific configuration name or
 *       the revisions for all configurations in your account. You can optionally query only the latest revision of each requested name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListAutoScalingConfigurationsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListAutoScalingConfigurationsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new ListAutoScalingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAutoScalingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListAutoScalingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListAutoScalingConfigurationsCommand extends smithy_client_1.Command {
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
    const clientName = "AppRunnerClient";
    const commandName = "ListAutoScalingConfigurationsCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.ListAutoScalingConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.ListAutoScalingConfigurationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_0_1.serializeAws_json1_0ListAutoScalingConfigurationsCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_0_1.deserializeAws_json1_0ListAutoScalingConfigurationsCommand(output, context);
  }
}
exports.ListAutoScalingConfigurationsCommand = ListAutoScalingConfigurationsCommand;
//# sourceMappingURL=ListAutoScalingConfigurationsCommand.js.map
