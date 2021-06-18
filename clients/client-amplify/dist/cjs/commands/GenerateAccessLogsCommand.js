"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateAccessLogsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p> Returns the website access logs for a specific time range using a presigned URL.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GenerateAccessLogsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GenerateAccessLogsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new GenerateAccessLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateAccessLogsCommandInput} for command's `input` shape.
 * @see {@link GenerateAccessLogsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GenerateAccessLogsCommand extends smithy_client_1.Command {
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
    const clientName = "AmplifyClient";
    const commandName = "GenerateAccessLogsCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.GenerateAccessLogsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.GenerateAccessLogsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1GenerateAccessLogsCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1GenerateAccessLogsCommand(output, context);
  }
}
exports.GenerateAccessLogsCommand = GenerateAccessLogsCommand;
//# sourceMappingURL=GenerateAccessLogsCommand.js.map
