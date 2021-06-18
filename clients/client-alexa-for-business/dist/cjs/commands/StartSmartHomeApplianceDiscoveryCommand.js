"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartSmartHomeApplianceDiscoveryCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Initiates the discovery of any smart home appliances associated with the
 *          room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, StartSmartHomeApplianceDiscoveryCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, StartSmartHomeApplianceDiscoveryCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new StartSmartHomeApplianceDiscoveryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSmartHomeApplianceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link StartSmartHomeApplianceDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartSmartHomeApplianceDiscoveryCommand extends smithy_client_1.Command {
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
    const clientName = "AlexaForBusinessClient";
    const commandName = "StartSmartHomeApplianceDiscoveryCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.StartSmartHomeApplianceDiscoveryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.StartSmartHomeApplianceDiscoveryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand(output, context);
  }
}
exports.StartSmartHomeApplianceDiscoveryCommand = StartSmartHomeApplianceDiscoveryCommand;
//# sourceMappingURL=StartSmartHomeApplianceDiscoveryCommand.js.map
