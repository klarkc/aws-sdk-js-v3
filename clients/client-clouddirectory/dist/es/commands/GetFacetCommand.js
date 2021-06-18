import { __extends } from "tslib";
import { GetFacetRequest, GetFacetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetFacetCommand,
  serializeAws_restJson1GetFacetCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema
 *       facets -- published, development, or applied.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetFacetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFacetCommandInput} for command's `input` shape.
 * @see {@link GetFacetCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFacetCommand = /** @class */ (function (_super) {
  __extends(GetFacetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetFacetCommand(input) {
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
  GetFacetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "GetFacetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetFacetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFacetResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetFacetCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetFacetCommand(input, context);
  };
  GetFacetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetFacetCommand(output, context);
  };
  return GetFacetCommand;
})($Command);
export { GetFacetCommand };
//# sourceMappingURL=GetFacetCommand.js.map
