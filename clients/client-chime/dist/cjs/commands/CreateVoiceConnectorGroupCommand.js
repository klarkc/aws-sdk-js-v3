"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVoiceConnectorGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can
 *             associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by
 *             including <code>VoiceConnectorItems</code> in the request.</p>
 *          <p>You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This
 *             creates a fault tolerant mechanism for fallback in case of availability events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateVoiceConnectorGroupCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateVoiceConnectorGroupCommand extends smithy_client_1.Command {
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
    const clientName = "ChimeClient";
    const commandName = "CreateVoiceConnectorGroupCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.CreateVoiceConnectorGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.CreateVoiceConnectorGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1CreateVoiceConnectorGroupCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1CreateVoiceConnectorGroupCommand(output, context);
  }
}
exports.CreateVoiceConnectorGroupCommand = CreateVoiceConnectorGroupCommand;
//# sourceMappingURL=CreateVoiceConnectorGroupCommand.js.map
