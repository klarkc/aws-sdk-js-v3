"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOutgoingTypedLinksCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
 *       information for an object. It also supports filtering by typed link facet and identity
 *       attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListOutgoingTypedLinksCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListOutgoingTypedLinksCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListOutgoingTypedLinksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOutgoingTypedLinksCommandInput} for command's `input` shape.
 * @see {@link ListOutgoingTypedLinksCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListOutgoingTypedLinksCommand extends smithy_client_1.Command {
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
    const commandName = "ListOutgoingTypedLinksCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.ListOutgoingTypedLinksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.ListOutgoingTypedLinksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1ListOutgoingTypedLinksCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1ListOutgoingTypedLinksCommand(output, context);
  }
}
exports.ListOutgoingTypedLinksCommand = ListOutgoingTypedLinksCommand;
//# sourceMappingURL=ListOutgoingTypedLinksCommand.js.map
