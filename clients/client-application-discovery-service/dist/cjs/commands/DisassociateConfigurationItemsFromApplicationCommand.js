"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisassociateConfigurationItemsFromApplicationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Disassociates one or more configuration items from an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DisassociateConfigurationItemsFromApplicationCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DisassociateConfigurationItemsFromApplicationCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new DisassociateConfigurationItemsFromApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateConfigurationItemsFromApplicationCommandInput} for command's `input` shape.
 * @see {@link DisassociateConfigurationItemsFromApplicationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DisassociateConfigurationItemsFromApplicationCommand extends smithy_client_1.Command {
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
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "DisassociateConfigurationItemsFromApplicationCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DisassociateConfigurationItemsFromApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DisassociateConfigurationItemsFromApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand(output, context);
  }
}
exports.DisassociateConfigurationItemsFromApplicationCommand = DisassociateConfigurationItemsFromApplicationCommand;
//# sourceMappingURL=DisassociateConfigurationItemsFromApplicationCommand.js.map
