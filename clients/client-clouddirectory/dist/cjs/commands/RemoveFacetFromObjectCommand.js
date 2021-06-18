"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveFacetFromObjectCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Removes the specified facet from the specified object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, RemoveFacetFromObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, RemoveFacetFromObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new RemoveFacetFromObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFacetFromObjectCommandInput} for command's `input` shape.
 * @see {@link RemoveFacetFromObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RemoveFacetFromObjectCommand extends smithy_client_1.Command {
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
    const clientName = "CloudDirectoryClient";
    const commandName = "RemoveFacetFromObjectCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.RemoveFacetFromObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.RemoveFacetFromObjectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1RemoveFacetFromObjectCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1RemoveFacetFromObjectCommand(output, context);
  }
}
exports.RemoveFacetFromObjectCommand = RemoveFacetFromObjectCommand;
//# sourceMappingURL=RemoveFacetFromObjectCommand.js.map
