"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartImageBuilderCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Starts the specified image builder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, StartImageBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, StartImageBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new StartImageBuilderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartImageBuilderCommandInput} for command's `input` shape.
 * @see {@link StartImageBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartImageBuilderCommand extends smithy_client_1.Command {
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
    const clientName = "AppStreamClient";
    const commandName = "StartImageBuilderCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.StartImageBuilderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.StartImageBuilderResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1StartImageBuilderCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1StartImageBuilderCommand(output, context);
  }
}
exports.StartImageBuilderCommand = StartImageBuilderCommand;
//# sourceMappingURL=StartImageBuilderCommand.js.map
