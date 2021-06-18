"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchUpdatePhoneNumberCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates phone number product types or calling names. You can update one attribute at a time for each
 *         <code>UpdatePhoneNumberRequestItem</code>. For example, you can update the product type or the calling name.</p>
 *
 *          <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For
 *             numbers outside the
 *             US,
 *             you must use the Amazon Chime SIP Media Application Dial-In product type.</p>
 *
 *          <p>Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you
 *             can request another update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchUpdatePhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchUpdatePhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchUpdatePhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdatePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link BatchUpdatePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchUpdatePhoneNumberCommand extends smithy_client_1.Command {
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
    const commandName = "BatchUpdatePhoneNumberCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.BatchUpdatePhoneNumberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.BatchUpdatePhoneNumberResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1BatchUpdatePhoneNumberCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1BatchUpdatePhoneNumberCommand(output, context);
  }
}
exports.BatchUpdatePhoneNumberCommand = BatchUpdatePhoneNumberCommand;
//# sourceMappingURL=BatchUpdatePhoneNumberCommand.js.map
