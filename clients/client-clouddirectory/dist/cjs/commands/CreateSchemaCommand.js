"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSchemaCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new schema in a development state. A schema can exist in three
 *       phases:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Development:</i> This is a mutable phase of the schema. All new
 *           schemas are in the development phase. Once the schema is finalized, it can be
 *           published.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Published:</i> Published schemas are immutable and have a version
 *           associated with them.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Applied:</i> Applied schemas are mutable in a way that allows you
 *           to add new schema facets. You can also add new, nonrequired attributes to existing schema
 *           facets. You can apply only published schemas to directories. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateSchemaCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateSchemaCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new CreateSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSchemaCommandInput} for command's `input` shape.
 * @see {@link CreateSchemaCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateSchemaCommand extends smithy_client_1.Command {
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
    const commandName = "CreateSchemaCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.CreateSchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.CreateSchemaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1CreateSchemaCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1CreateSchemaCommand(output, context);
  }
}
exports.CreateSchemaCommand = CreateSchemaCommand;
//# sourceMappingURL=CreateSchemaCommand.js.map
