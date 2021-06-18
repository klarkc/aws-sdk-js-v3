"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutAccountConfigurationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds or modifies
 *       account-level configurations in ACM.
 *       </p>
 *          <p>The
 *       supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies the
 *       number of days prior to certificate expiration when ACM starts generating
 *         <code>EventBridge</code> events. ACM sends one event per day per certificate until the
 *       certificate expires. By default, accounts receive events starting 45 days before certificate
 *       expiration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, PutAccountConfigurationCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, PutAccountConfigurationCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new PutAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutAccountConfigurationCommand extends smithy_client_1.Command {
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
    const clientName = "ACMClient";
    const commandName = "PutAccountConfigurationCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.PutAccountConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1PutAccountConfigurationCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1PutAccountConfigurationCommand(output, context);
  }
}
exports.PutAccountConfigurationCommand = PutAccountConfigurationCommand;
//# sourceMappingURL=PutAccountConfigurationCommand.js.map
