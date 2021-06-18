import { __extends } from "tslib";
import { ListManagedSchemaArnsRequest, ListManagedSchemaArnsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListManagedSchemaArnsCommand,
  serializeAws_restJson1ListManagedSchemaArnsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListManagedSchemaArnsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListManagedSchemaArnsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListManagedSchemaArnsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListManagedSchemaArnsCommandInput} for command's `input` shape.
 * @see {@link ListManagedSchemaArnsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListManagedSchemaArnsCommand = /** @class */ (function (_super) {
  __extends(ListManagedSchemaArnsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListManagedSchemaArnsCommand(input) {
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
  ListManagedSchemaArnsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListManagedSchemaArnsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListManagedSchemaArnsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListManagedSchemaArnsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListManagedSchemaArnsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListManagedSchemaArnsCommand(input, context);
  };
  ListManagedSchemaArnsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListManagedSchemaArnsCommand(output, context);
  };
  return ListManagedSchemaArnsCommand;
})($Command);
export { ListManagedSchemaArnsCommand };
//# sourceMappingURL=ListManagedSchemaArnsCommand.js.map
