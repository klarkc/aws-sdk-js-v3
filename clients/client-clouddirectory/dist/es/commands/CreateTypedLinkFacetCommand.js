import { __extends } from "tslib";
import { CreateTypedLinkFacetRequest, CreateTypedLinkFacetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateTypedLinkFacetCommand,
  serializeAws_restJson1CreateTypedLinkFacetCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateTypedLinkFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateTypedLinkFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new CreateTypedLinkFacetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTypedLinkFacetCommandInput} for command's `input` shape.
 * @see {@link CreateTypedLinkFacetCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTypedLinkFacetCommand = /** @class */ (function (_super) {
  __extends(CreateTypedLinkFacetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateTypedLinkFacetCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  CreateTypedLinkFacetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "CreateTypedLinkFacetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateTypedLinkFacetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTypedLinkFacetResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateTypedLinkFacetCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateTypedLinkFacetCommand(input, context);
  };
  CreateTypedLinkFacetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateTypedLinkFacetCommand(output, context);
  };
  return CreateTypedLinkFacetCommand;
})($Command);
export { CreateTypedLinkFacetCommand };
//# sourceMappingURL=CreateTypedLinkFacetCommand.js.map
