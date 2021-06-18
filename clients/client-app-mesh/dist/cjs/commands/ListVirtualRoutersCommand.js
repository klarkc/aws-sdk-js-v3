"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListVirtualRoutersCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of existing virtual routers in a service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualRoutersCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListVirtualRoutersCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListVirtualRoutersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualRoutersCommandInput} for command's `input` shape.
 * @see {@link ListVirtualRoutersCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListVirtualRoutersCommand extends smithy_client_1.Command {
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
    const clientName = "AppMeshClient";
    const commandName = "ListVirtualRoutersCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.ListVirtualRoutersInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.ListVirtualRoutersOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1ListVirtualRoutersCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1ListVirtualRoutersCommand(output, context);
  }
}
exports.ListVirtualRoutersCommand = ListVirtualRoutersCommand;
//# sourceMappingURL=ListVirtualRoutersCommand.js.map
